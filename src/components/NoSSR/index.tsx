/* eslint-disable */
import dynamic from 'next/dynamic';
import React from 'react';

export interface Props {
  children: React.ReactNode;
}

const NoSsr: React.FC<Props> = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
