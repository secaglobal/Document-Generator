from document_types import DocumentTypes
from pdf_document_factory import PDFDocumentFactory

class DocumentFactory (object):
  """Interface for factories that create documents (Abstract factory)"""
  
  @staticmethod
  def getFactory(type):    
    if (type == DocumentTypes.PDF) return PDFDocumentFactory()
    else:
      #ADD EXCEPTION
      pass

  def getRawParser(self, filepath):
    """Creates document raw(data) parser
       @param filepath {string} Path to file where located document raw"""
    pass

  def getTemplate(self, filepath):
    """Creates object resposible for template
       @param filepath {string} Path to file where located template"""
    pass

  def getDocBuilder(self, raw, template):
    """Creates object that responsible for building output documnet
       @param raw {DocumentRawParser} Raw parser
       @param template {Template} Template"""
    pass 
