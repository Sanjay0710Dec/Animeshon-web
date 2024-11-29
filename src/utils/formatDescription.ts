export default function descriptionFormatter(desc: string) {
    
    const replacements:string[] = ["<i>","</i>","<br>","</br>","(Source)","(Source:","\n","USA","Notes",")",":","Aniplex","Crunchyroll"];

    for(const item of replacements){
        desc = desc.split(item).join("");
    }
    return desc;
    
     
  }