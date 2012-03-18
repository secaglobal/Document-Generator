import logging
import XMLTemplateParser
from exception import TypeIncorrect, FileNotFound
from os.path import splitext

class Template (object):
  """Interface for working with templates"""
  TYPES = {
    'xml': XMLTemplateParser
  }

  def __init__(self, filepath):
    self.__filepath = filepath
    self.__parser_impl = None

  def __getParser(self):
    """Returns template parser"""
    if not self.__parser_impl:
      type = splitext(self.__filepth)[1][1:].strip().lowercase()
      logging.info('Searching template ' + self.filepath)
      if type in self.TYPES:
        self.__parser_impl = self.TYPES.get(type)(self.filepath)
        logging.info('Initialized template for type ' + type)
      else: raise TypeIncorrect()
