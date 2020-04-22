from bs4 import BeautifulSoup
import requests
import enchant
import sys

if __name__ == '__main__':
    URL = sys.argv[1]
    ruleArray = sys.argv[2]
    minimum = sys.argv[3]
    maximum = sys.argv[4]
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, 'html.parser')
    soup = soup.find('body')
    souplines = str(soup).split("\n")
    parsed = []
    parsed_lines = []
    R_lower = []
    for lines in souplines:
        lines = lines[:-1]
        i = 0
        if (lines.startswith("(") or lines.startswith("#") or lines.startswith(" ") or lines.startswith("http") or lines.startswith("[") or lines.startswith(" !") or lines.startswith(" {") or lines.startswith("       ") or lines.startswith("\t") or lines.startswith("var") or ("height:" in lines) or ("width:" in lines) or ("content:" in lines) or ("display:" in lines) or ("margin:" in lines) or ("&" in lines) or ("-->" in lines)):
            lines = ""
        for letter in lines:
            if(letter == "\n"):
                continue
            if (letter == "<"):
                i += 1
            if i == 0:
                '''if letter == " ":
                    parsed.append("|")
                else:'''
                parsed.append(letter)
            if (letter == ">"):
                i -= 1
        line = str("".join(parsed))
        line = line.replace("|", " ").replace("\n", " ")
        if(len(line) > 6):
            parsed_lines.append((line))
        parsed.clear()
    words = set()
    for wo in ruleArray:
        R_lower.append(wo.lower())
    for line in parsed_lines:
        line_words = line.split()
        for w in line_words:
            if w.lower() not in ruleArray.lower():
                if len(w) > int(minimum) and len(w) < int(maximum):
                    if w.isalpha():
                        words.add(w)
    print(list(words))
    sys.stdout.flush()
    