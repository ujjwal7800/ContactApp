const ContactInfo = require("./ContactInfo")

class Contact {
    static ID = 0
    constructor(contactName, country) {
        this.ID = Contact.ID++
        this.contactName = contactName
        this.country = country
        this.contactInfos = []
    }

    updateContact(parameter, newValue) {
        switch (parameter) {
            case "contactName":
                this.contactName = newValue
                return this
            case "country":
                this.country = newValue
                return this
            default:
                return "Invalid Parameter"
        }
    }
    createContactInfo(phoneNumber, email) {
        let contactInfoObj = new ContactInfo(phoneNumber, email)
        this.contactInfos.push(contactInfoObj)
        return contactInfoObj
    }
    getContactInfo() {
        return this.contactInfos
    }
    findContactInfo(contactID) {
        try {
            if (contactID != "number") {
                throw new error("not a number")
            }

            for (let index = 0; index < this.contactInfos.length; index++) {
                if (this.contactInfos[index].ID == contactID) {
                    return index
                }
            }
            return false
        }
        catch (u) {
            throw u
        }
    }
    updateContactInfos(contactID, parameter, value) {
        try {
            let [indexOfContact, isContactInfo] = this.findContactInfo(contactID)
            if (!isContactInfo) {
                throw new error("Contact  does not exist")
            }
            return this.contactInfos[indexOfContact].updateContactInfo(parameter, value)
        }
        catch (e) {
            throw e
        }
    }
    deleteContactInfo(contactID) {

        let [indexOfContact, isContact] = this.findContactInfo(contactID)
        if (!isContact) {
            return "No contact found. Contact does not exist";
        }
        this.contactInfos.splice(indexOfContact, 1)
        return Contact.contactInfos
    }
    getContactInfoById(ID) {
        let [indexOfUser, isContactInfo] = this.findContactInfo(ID)
        if (!isContactInfo) {
            return "Contact Information Not Found"
        }
        return this.contactInfos[indexOfUser]
    }
}

module.exports = Contact













