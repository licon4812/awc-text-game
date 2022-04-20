// AWC Game.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>
#include <windows.h>

using namespace std;

class Level1
{
    bool restart;
    int direction;
    public:
    void start() {
        int number;
        cout << "You approach a door where you must guess the Correct number\n What number do you guess?: ";
        cin >> number;
        if (number == 69) {
            cout << "Good Guess\n";
            cout << "You see a path before you. Do you go left or right?\n";
            cout << "Please type a number bellow.\n";
            cout << "1.left\n";
            cout << "2.right\n";
            cin >> direction;
            if (cin.fail()) {
                cout << "\nPlease type a number bellow. 1 is Left, 2 is Right:";
                cin >> direction;
            }
            else{
                switch (direction) {
                case 1:
                    cout << "You continue down the hallway where you run into a short chubby man";
                    break;
                case 2:
                    cout << "You continue down the left hallway until you run into an Italian Giga Chad With massive calves";
                    break;
                }
            }
        }
        else {
            cout << "Wrong Guess nigger try again\n";
            return start();
        }
    }
};

void getTerminalSize() 
{
    CONSOLE_SCREEN_BUFFER_INFO csbi;
    int columns, rows;

    GetConsoleScreenBufferInfo(GetStdHandle(STD_OUTPUT_HANDLE), &csbi);
    columns = csbi.srWindow.Right - csbi.srWindow.Left + 1;
    rows = csbi.srWindow.Bottom - csbi.srWindow.Top + 1;

    //printf("columns: %d\n", columns);
    //printf("rows: %d\n", rows);
}

void centerString(string s)
{
    getTerminalSize();
    int l = s.length();
    int pos = (int)((80 - l) / 2);
    for (int i = 0; i < pos; i++)
        cout << " ";
    cout << s;
}


void game() {
    system("Color 9");
    centerString("The AWC\n");
    Level1 Level1;
    Level1.start();
}

int main()
{
   game();
}


