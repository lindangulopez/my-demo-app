import Head from 'next/head';
import {useRef} from 'react';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event){
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch(); // { email: 'test@test.com', text:'user feedback text'}

  }



  return (
    <div>
    <Head>
      <title>NextJS Events</title>
      <meta
        name='description'
        content='Events to build your Next.JS skills'
      />
    </Head>
    <div className='center'>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='feedback'>Please submit your Feedback.</label>
          <br/>
          <textarea id='feedback' rows='15'ref={feedbackInputRef}></textarea>
        </div>
        <br/>
        <div>
          <label htmlFor='email'>Enter a valid Email Address.</label>
          <br/>
          <input type='email' id='email'ref={emailInputRef} />
        </div>
        <br/>
        <button>Send Feedback</button>
      </form>
    </div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;
