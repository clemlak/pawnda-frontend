import React, {
  useEffect,
} from 'react';

import * as firebase from 'firebase/app';
import 'firebase/database';

import {
  Title,
  Text,
} from '../../style/components';

function Home() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyBRyv-jSgfzPby9tVX7qKKLuXSwgVoVBPE',
      authDomain: 'pawnda-7ebba.firebaseapp.com',
      databaseURL: 'https://pawnda-7ebba.firebaseio.com',
      projectId: 'pawnda-7ebba',
      storageBucket: 'pawnda-7ebba.appspot.com',
      messagingSenderId: '1040825009214',
      appId: '1:1040825009214:web:017c525a337fb3e991fd6f',
      measurementId: 'G-JZN83W0DVG',
    };

    firebase.initializeApp(firebaseConfig);
  });

  function saveStuff() {
    const database = firebase.database();

    const ref = firebase.database().ref('requests');
    const newRequest = ref.push({
      timestamp: Date.now(),
      value: 'Hello',
    });
  }

  return (
    <>
      <Title>
        Welcome
      </Title>
      <Text>
        This is a website!
      </Text>
      <button type="button" onClick={() => saveStuff()}>
        Save stuff
      </button>
    </>
  );
}

export default Home;
