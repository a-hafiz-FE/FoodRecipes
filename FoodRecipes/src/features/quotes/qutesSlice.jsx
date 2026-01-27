import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: [
    {
      id: 1,
      quote:
        "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      author: "Rumi",
      totalLikes: 87,
    },
    {
      id: 2,
      quote:
        "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
      author: "Abdul Kalam",
      totalLikes: 12,
    },
    {
      id: 3,
      quote:
        "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
      author: "Abdul Kalam",
      totalLikes: 64,
    },
    {
      id: 4,
      quote: "If You Can'T Make It Good, At Least Make It Look Good.",
      author: "Bill Gates",
      totalLikes: 41,
    },
    {
      id: 5,
      quote:
        "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
      author: "Rumi",
      totalLikes: 93,
    },
    {
      id: 6,
      quote:
        "It is bad for a young man to sin; but it is worse for an old man to sin.",
      author: "Abu Bakr (R.A)",
      totalLikes: 28,
    },
    {
      id: 7,
      quote:
        "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
      author: "Albert Einstein",
      totalLikes: 76,
    },
    {
      id: 8,
      quote:
        "O man you are busy working for the world, and the world is busy trying to turn you out.",
      author: "Abu Bakr (R.A)",
      totalLikes: 19,
    },
    {
      id: 9,
      quote:
        "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
      author: "Abdul Kalam",
      totalLikes: 58,
    },
    {
      id: 10,
      quote:
        "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
      author: "Abraham Lincoln",
      totalLikes: 33,
    },
    {
      id: 11,
      quote:
        "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
      author: "Oprah Winfrey",
      totalLikes: 80,
    },
    {
      id: 12,
      quote:
        "Do not get elated at any victory, for all such victory is subject to the will of God.",
      author: "Abu Bakr (R.A)",
      totalLikes: 25,
    },
    {
      id: 13,
      quote:
        "Wear gratitude like a cloak and it will feed every corner of your life.",
      author: "Rumi",
      totalLikes: 97,
    },
    {
      id: 14,
      quote:
        "If you even dream of beating me you'd better wake up and apologize.",
      author: "Muhammad Ali",
      totalLikes: 55,
    },
    {
      id: 15,
      quote: "I Will Praise Any Man That Will Praise Me.",
      author: "William Shakespeare",
      totalLikes: 22,
    },
    {
      id: 16,
      quote: "One Of The Greatest Diseases Is To Be Nobody To Anybody.",
      author: "Mother Teresa",
      totalLikes: 69,
    },
    {
      id: 17,
      quote:
        "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.",
      author: "Muhammad Ali",
      totalLikes: 44,
    },
    {
      id: 18,
      quote:
        "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
      author: "Nelson Mandela",
      totalLikes: 84,
    },
    {
      id: 19,
      quote:
        "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
      author: "Rumi",
      totalLikes: 61,
    },
    {
      id: 20,
      quote: "The less of the World, the freer you live.",
      author: "Umar ibn Al-Khattāb (R.A)",
      totalLikes: 16,
    },
    {
      id: 21,
      quote: "Respond to every call that excites your spirit.",
      author: "Rumi",
      totalLikes: 90,
    },
    {
      id: 22,
      quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
      author: "Walt Disney",
      totalLikes: 52,
    },
    {
      id: 23,
      quote:
        "God Doesn'T Require Us To Succeed, He Only Requires That You Try.",
      author: "Mother Teresa",
      totalLikes: 35,
    },
    {
      id: 24,
      quote:
        "Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love.",
      author: "Rumi",
      totalLikes: 78,
    },
    {
      id: 25,
      quote: "Happiness comes towards those which believe in him.",
      author: "Ali ibn Abi Talib (R.A)",
      totalLikes: 14,
    },
    {
      id: 26,
      quote:
        "Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed.",
      author: "Ali ibn Abi Talib (R.A)",
      totalLikes: 67,
    },
    {
      id: 27,
      quote: "When I am silent, I have thunder hidden inside.",
      author: "Rumi",
      totalLikes: 88,
    },
    {
      id: 28,
      quote:
        "Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal.",
      author: "Albert Einstein",
      totalLikes: 49,
    },
    {
      id: 29,
      quote:
        "No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World.",
      author: "Aristotle",
      totalLikes: 26,
    },
    {
      id: 30,
      quote:
        "Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you.",
      author: "Muhammad Ali",
      totalLikes: 84,
    },
  ],
};

const filteredState = {
  quotes: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    // filter Quotes
    // search Quotes
    // list Authers
    getAuthors: (state) => {
      // get authors from quotes
      // reduce repeated names
      authors.reduce((allAuthors, state.quotes));
      // return an array of authors names
    },
  },
});

export const { showQuotes } = quotesSlice.actions;
export default quotesSlice.reducer;
