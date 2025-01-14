// import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
const Dummy = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
    address: "Some Address",
    description: "This is s new Meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-260nw-2212935531.jpg",
    address: "Some Address",
    description: "This is s new Meetup",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from an API
  // const client = await MongoClient.connect(
  //   "link of cluster with id and password"
  // );
  // const db = client.db;

  // const meetupsCollection = db.collection("meetups");
  // const meetups = await meetupsCollection.find().toArray();
  // client.close();

  return {
    props: {
      meetups: Dummy, //dummy data
    },
    // {
    //   meetups: meetups.map((meetup) => ({
    //     title: meetup.title,
    //     address: meetup.address,
    //     image: meetup.image,
    //     id: meetup._id.toString(),
    //   })),
    // },
  };
}
