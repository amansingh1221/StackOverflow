#include <stdio.h>

int main(){
  char plain[100];
  int k;
  printf("enter value of key\n");
  scanf("%d",&k);
  printf("enter the plain text\n");
 
    scanf("%s",plain);
  

// int cipher[];
  for(int i=0;plain[i]!='\0';i++){
    plain[i]=((plain[i]-'a')+k)%26+'a';
    
  }
  
  printf("%s", plain);

  return 0;
}