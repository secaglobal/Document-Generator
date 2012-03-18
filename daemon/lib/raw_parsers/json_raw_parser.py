import logging
import FileBroken from exceptions

JSONRawParser(object):
  """Interface for parsing document raw files (pattern Bridge)"""

  def __init__(self, filepoiner):
    self.__fp = filepointer

