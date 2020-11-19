import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Router from 'next/router';

export default function Home() {

    useEffect(() => {
         Router.replace('/album')
    }, []);


  return (
    <>

    </>
  )
}
