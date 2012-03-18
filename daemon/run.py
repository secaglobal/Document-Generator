import threading
import logging

from lib.server import Server
#import Handler

logging.basicConfig(level=logging.DEBUG)

def main():
  Server()
    

if __name__ == '__main__': main()
