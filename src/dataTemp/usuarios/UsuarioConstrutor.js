export default class Usuarios {
    constructor(
        uid, 
        displayName, 
        email, 
        id, 
        address, 
        addressNumber, 
        cpfCnpj, 
        mobilePhone, 
        name,
        postalCode,
        province,
        state,
        curso_id
        ) {
            this.uid = uid; // Google
            this.displayName = displayName;
            this.email = email;
            //
            this.id = id; //ASAAS
            this.address = address;
            this.addressNumber = addressNumber;
            this.cpfCnpj = cpfCnpj;
            this.mobilePhone = mobilePhone;
            this.name = name;
            this.postalCode = postalCode;
            this.province = province;
            this.state = state;
            //
            this.curso_id = curso_id;
        }
    }
    
    