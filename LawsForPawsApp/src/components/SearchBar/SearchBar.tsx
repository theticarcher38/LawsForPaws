import { IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {

    const [searchText, setSearchText] = useState('');

    return (
        <>
            <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
        </>
    )

}

export default SearchBar