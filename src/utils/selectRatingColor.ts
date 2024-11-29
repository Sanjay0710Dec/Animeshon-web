

export function selectRatingColour(rating:number){
   
    if(rating>90){
        return "text-[#008000]";
    }
    else if(rating > 80){
        return "text-[#90EE90]";
    }
    else if(rating > 70){
         return "text-[#FFD700]";
    }
    else if(rating > 60){
        return "text-[#FFA500]";
    }
    else if(rating > 50){
       return "text-[#FF6B6B]";
    }
    else {
      return "text-[#D3D3D3]"
    }
}