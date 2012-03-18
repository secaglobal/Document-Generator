import time
import logging
import threading

from queued import Queued
from processor import Processor

class Server (object):

  processors_count = 0
  max_processors_count = 2

  def __init__(self):
    self.queued = None
    self.run()

  def run(self):
    """Run server"""
    logging.info('Server started')
    try:
      self.startQueued()
      while True:
        while self.processors_count < self.max_processors_count:
          doc = self.queued.getNextDocument()
          print doc, 10
          if not doc: break
          proc = threading.Thread(target = Processor,
                                  args = (doc.get('raw_url'), doc.get('type')))
          proc.daemon = True
          proc.start()
          self.processors_count += 1

        logging.debug('Server waiting...')
        time.sleep(10)
    except KeyboardInterrupt:
      logging.warning('CTRL + C pressed')

  def startQueued(self):
    """Start Queue Daemon"""
    if not self.queued: self.queued = Queued()

