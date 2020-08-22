teks1 = input("Masukkan kata : ")
word = ""
i = 0
hasil = []
for x in range(0,len(teks1)) :
    if teks1[x] == ' ':
        hasil[i]= word
        word = ""    
        i=i+1
    else :
        word = word+ teks1[x]
hasil.append(word)
print(hasil)

kalimat = "saya suka makan nasi";
temp = ""
x = 0
kata = []
for (i = 0; i <= kalimat.length; i++) {
  if(kalimat[i] != ' '){
      temp = temp +kalimat[i]
  }
  else{
      kata[x] = temp
      temp= ""
      x=x+1
  }
}
hasil= ""
for(i=kata.length-1;i>=0;i--){
    hasil = hasil + kata[i] + " "
}
console.log(hasil)


