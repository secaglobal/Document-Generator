import threading
import logging
import time
import MySQLdb
import MySQLdb.cursors

class Queued(object):
  """Daemon that keeps queue up to date"""

  queue_limit = 10
  min_check_limit = 5
  sleep = 10
 
  def __init__(self):
    self.queue = []
    self.db_connect = None
    self.thread = threading.Thread(target=self)
    self.thread.daemon = True
    self.thread.start()

  def __call__(self):
    logging.info('Queue daemon started')
    while True:
      self.checkQueue()
      time.sleep(self.sleep)

  def checkQueue(self):
    """Checks if queue shoud be updated"""
    logging.info('Queue checking ...')
    items_count = len(self.queue)
    if items_count <= self.min_check_limit:
      self.fillQueue(self.queue_limit - items_count)

  def fillQueue(self, num):
    """Fill queue with new rows"""
    logging.info("Queue updating(%d) ..." % num)
    docs = self._loadPendingDocuments(num)
    logging.debug('Loaded additional %d pending documents' % len(docs))
    self.queue.extend(docs)

  def getNextDocument(self):
    """Returns next document from queue"""
    if len(self.queue):
      doc = self.queue[0]
      logging.info("Document retrieved from queue: " + str(doc))
      self.queue[1:]
      return doc
    else:
      return None

  def _getConnect(self):
    """Creates connection with database"""
    if not self.db_connect:
      try:
        params = {
          'host': 'localhost',
          'user': 'root',
          'passwd': 'ramstein',
          'db': 'pdfgen',
          'cursorclass': MySQLdb.cursors.DictCursor
        }
        self.db_connect = MySQLdb.connect(**params)
      except MySQLError, err:
        logging.error('MYSQL: ' + err);
    return self.db_connect

  def _loadPendingDocuments(self, num):
    """Load data about pending documents
       @param num {int} Max number of documents"""
    try:
      conn = self._getConnect()
      cur = conn.cursor()
      cur.execute('SELECT * FROM queue ORDER BY date asc LIMIT %d' % (num))
      return cur.fetchall()
    except MySQLError, err:
      logging.error('MYSQL: ' + err)
      return []
      
    
    
