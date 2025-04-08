import Navigation from "@/components/Navigation";

const sessions = [
  {
    day: "Monday",
    time: "6:00 PM - 8:00 PM",
    level: "All Levels",
    location: "Main Court",
  },
  {
    day: "Wednesday",
    time: "6:00 PM - 8:00 PM",
    level: "All Levels",
    location: "Main Court",
  },
  {
    day: "Saturday",
    time: "9:00 AM - 11:00 AM",
    level: "All Levels",
    location: "Main Court",
  },
];

export default function Schedule() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-primary p-8 neo-brutalism text-white mb-8">
          <h1 className="neo-brutalism-title text-white">
            Pickleball Schedule
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl font-bold text-white">
            Join us for our regular pickleball sessions. All skill levels are
            welcome!
          </p>
        </div>

        <div className="mt-12">
          <div className="neo-brutalism-card bg-white">
            <h2 className="neo-brutalism-subtitle text-primary">
              Weekly Sessions
            </h2>
            <p className="mt-1 text-black font-bold">
              Regular pickleball sessions at Holy Family
            </p>
            <div className="mt-6 space-y-4">
              {sessions.map((session, index) => (
                <div key={index} className="neo-brutalism-card bg-white">
                  <h3 className="text-xl font-bold text-primary">
                    {session.day}
                  </h3>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-black">
                    <div>
                      <span className="font-bold">Time:</span> {session.time}
                    </div>
                    <div>
                      <span className="font-bold">Level:</span> {session.level}
                    </div>
                    <div>
                      <span className="font-bold">Location:</span>{" "}
                      {session.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="neo-brutalism-card bg-accent">
            <h3 className="neo-brutalism-subtitle text-black">
              Important Information
            </h3>
            <div className="mt-4 text-black font-bold">
              <p>
                Please arrive 10 minutes before the session start time.
                Equipment is provided, but feel free to bring your own paddle if
                you have one.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="/contact"
                className="neo-brutalism-button bg-primary text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
