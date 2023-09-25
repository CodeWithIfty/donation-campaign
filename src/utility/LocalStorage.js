const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donated')

    if(storedDonations){
        return JSON.parse(storedDonations);
    }
    else{
        return []
    }
}

    const saveDonation = id => {
        const storedDonations = getStoredDonations();
        const isExists = storedDonations.find(donationId => donationId === id)

        if(!isExists){
            storedDonations.push(id)
            localStorage.setItem('donated', JSON.stringify(storedDonations))
        }
    }

export {getStoredDonations, saveDonation}