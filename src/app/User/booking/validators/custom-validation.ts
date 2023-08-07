import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidation {

    static ValidateName(control:AbstractControl){
        const value = control.value as string;
        if(value.includes('test')){
            return{
                invalidName:true 
            }
        }
        return null;
    }
    static validateSpecialCharacter(char:string){
        return(control:AbstractControl)=>{
            const value = control.value as string;
            if(value.includes(char)){
                return {
                    invalidSpecialChar:true,
                };
            }
            return null;
        }
    }
    static ValidateDate(control:FormGroup){
        const importedDate :any = new Date(control.get('importedDate')?.value);
        const exportDate: any = new Date(control.get('exportDate')?.value);
        const diffTime = exportDate-importedDate;
        const diffDays = Math.ceil(diffTime/(1000*60*60*24))
        if(diffDays<=0){
            control.get('exportDate')?.setErrors({
                invalidDate:true
            })
            return {invalidDate:true}
        }
        return null;
    }
}

