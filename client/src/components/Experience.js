import React from 'react';
import { headers } from '../data/headers';
import PageHeader from './PageHeader';
import './Experience.css'
import Paper from '@material-ui/core/Paper'

export default function Experience(){
    return (
      <div style={{ margin: "5vh 0" }} className="Experience">
        <PageHeader header={headers.Experience} />
        <Paper style={{ margin: 24, padding: 10 }} elevation={5}>
          <div className="Experience-text">
            <h5>Pre-shoot</h5>
            <p>
              We start with a phone call a few days before the shoot so that I
              can get a better understanding of what you want and to get to know
              your family a bit more so that I can tailor my approach. I will
              also explain what to expect on the day and give you tips on how
              best to coordinate colours and outfits. I kindly ask that the
              booking deposit is made at this point.
            </p>
            <h5>On the day</h5>
            <p>
              The shoot itself will typically take around 1.5-2 hours at the
              location of your choosing. I keep it pretty relaxed and will leave
              plenty of time for the children (and parents!) to take a breather
              and enjoy themselves. I will do whatever I can to keep you and
              your children entertained - I was once in the middle of the road
              pretending to be a unicorn to amuse a four year-old! Apologies in
              advance for any funny looks that you may get because of me!
            </p>
            <h5>Post-shoot</h5>
            <p>
              Sorting and editing photos takes some time, so I will aim to give
              you a first view within three weeks. I will provide you with an
              online gallery of all the digital images so that you can go
              through them at your leisure and pick your favourites. Once you
              have picked your photos and made the final payment, I will create
              and send your final products. I will share your downloadable
              digital images via the online gallery and mail any hard products
              in a single package.
            </p>
          </div>
        </Paper>
      </div>
    );
}