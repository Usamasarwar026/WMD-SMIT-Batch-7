#include <iostream>
using namespace std;

int add(int a, int b) {
    cout<<"int adding"<<endl;
    return a + b;
}

float add(float a, float b) {
    cout<<"float adding"<<endl;
    return a + b;
}


int main(){
    int adding=add(3,4);
    cout<<"the sum of two number is"<<adding<<endl;

}