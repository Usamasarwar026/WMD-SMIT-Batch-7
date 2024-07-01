   s = s.split("");
    for(let i=0; i<=s.length-2;i++){
        for(let j=1;j<=s.length-1;j++){
            if(s.charAt(s[i]) !== s.charAt(s[j])){
                return s[i];
            }
            else if(s.charAt(s[i]) == s.charAt(s[j])){
                j++
            }else{
            return -1
            }
            
        }

    }