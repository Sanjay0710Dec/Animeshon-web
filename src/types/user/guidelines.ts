export interface DMCAMatter{
    title:string,
    description:string[]
}


export interface PrivacyPolicy extends DMCAMatter{
    
}


export interface TermsOfService extends DMCAMatter{
    
}

export type GuideLinesType = DMCAMatter[]