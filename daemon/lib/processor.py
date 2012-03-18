import config
import threading
import logging
import urllib
from enums.document_types import DocumentTypes

class Processor(object):

  def __init__(self, url, type):
    logging.info('Processor initialization...')
    self.__url = url
    self.__type = type
    self.__filename = 'testfile';
    self.__start()  

  def __start(self):
    try:
      logging.info('Processig document...')
      self.__downloadRawFile()
      factory = self.__getFactory()
      raw = factory.getRawParser(self.__filename)
      
      
    except IOError, err:
      logging.error("Cannot download configuration. Error: " + str(err))   
 
  def __downloadRawFile(self):
    logging.debug('Loading document configuration ' + self.__url)
    urllib.urlretrieve(self.__url, self.__filename)
    logging.info('Loaded config file')

  def __getFactory(self):
    if (self.__type == DocumentTypes.PDF) return PdfDocumentFactory()
    else raise IncorrectDocType

