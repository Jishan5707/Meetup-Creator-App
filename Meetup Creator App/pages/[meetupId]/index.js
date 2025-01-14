import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
      title="A first Meetup"
      address="Some Address"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths(params) {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
        id: meetupId,
        title: "A first Meetup",
        address: "Some Address",
        description: "The meetup description",
      },
    },
  };
}
