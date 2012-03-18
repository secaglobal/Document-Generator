import logging
import FileBroken from Exceptions
import JSONRawParser from json_raw_parser 

DocumentRawParser(object):
  """Interface for parsing document raw files (pattern Bridge)"""

  def __init__(self, filepath):
    self.filepath = filepath
    self.parser_impl = None

  def __getParser(self):
    """Returns parser"""
    if not self.parser_impl:
      fp = file(self.filepth, 'r')
      line = fp.readline()
      if line == 'json0': self.parser_impl = JSONRawParser(fp)
      else: raise FileBroken()
    return self.parser_impl

