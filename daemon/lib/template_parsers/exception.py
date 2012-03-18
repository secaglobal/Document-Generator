class TemplateError (Exception): pass

class TypeIncorrect (TemplateError): pass

class FileNotFound (TemplateError): pass
