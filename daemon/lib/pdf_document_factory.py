import logging
import DocumentFactory
import DocumentRawParser from raw_parsers

class PdfDocumentFactory (DocumentFactory):
  """Factory responsible for creating PDF documents"""
 
  def __init__(self):
    logging.info('Used PDF Document Factory')

  def getRawParser(self, filepath):
    """Creates document raw(data) parser
       @param filepath {string} Path to file where located document raw"""
       return DocumentRawParser(filepath)

  def getTemplate(self, filepath):
    """Creates object resposible for template
       @param filepath {string} Path to file where located template"""
    pass

  def getDocBuilder(self, raw, template):
    """Creates object that responsible for building output documnet
       @param raw {DocumentRawParser} Raw parser
       @param template {Template} Template"""
    pass

  

  
