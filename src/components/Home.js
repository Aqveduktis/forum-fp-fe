import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Page } from 'lib/shared';
import { PageTitle, Text } from 'lib/text';


export const Home = () => {
	// const dispatch = useDispatch()
	// const name = "Emil"

	//   const myName = (e) => {
	//     dispatch(
	//       userStore.actions.loginUser({
	//         name
	//       })
	//     );

	//   };
	//   myName()
	return (
  <Page>
  <PageTitle>Start Page</PageTitle>
  <Text>Hello from front page</Text>
  </Page>
  ) 
};
