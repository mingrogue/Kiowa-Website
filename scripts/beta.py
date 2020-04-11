import sys
from bs4 import BeautifulSoup
import requests
#import argparse

if __name__ == '__main__':
    # argsParser = argparse.ArgumentParser()
    # argsParser.add_argument("--link", type=str, nargs=1, required=True, dest='link',
                            # help="input files directory")
    # commandLineArgs = argsParser.parse_args()
    URL = sys.argv[1]
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, 'html.parser')
    ol = soup.find('ol')
    words = []
    for element in ol.find_all('li'):
        #print(element.find('em').text)
        words.append(element.find('em').text)
    print(words)
    sys.stdout.flush()