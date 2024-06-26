import StoryChallengeContinuation from "./StoryChallengeContinuation";
import StoryChallengeMultipleChoice from "../StoryChallengeMultipleChoice";
import StoryProgress from "../StoryProgress";
import React from "react";

const meta = {
  component: StoryChallengeContinuation,
  argTypes: {},
};

export default meta;

const parts = [
  {
    lang: "en",
    type: "CHALLENGE_PROMPT",
    editor: {
      end_no: 51,
      start_no: 49,
      active_no: 50,
      block_start_no: 49,
    },
    prompt: {
      text: "Tap what you hear. CONTINUATION",
      hints: [],
      hintMap: [],
    },
    trackingProperties: {
      line_index: 0,
      challenge_type: "continuation",
    },
  },
  {
    lang: "nl",
    line: {
      type: "CHARACTER",
      content: {
        text: "I write with words.",
        audio: {
          ssml: {
            id: 0,
            text: '<speak>I write with <prosody volume="silent">words</prosody>.</speak>',
            mapping: [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              12,
              13,
              14,
              15,
              16,
              17,
              17,
              17,
              17,
              17,
              17,
              17,
              17,
              17,
              17,
              17,
              18,
              18,
              18,
              18,
              18,
              18,
              18,
              18,
              18,
            ],
            speaker: "",
            plan_text: "I write with [words].",
            inser_index: 7,
          },
        },
        hints: ["I", "write", "with", "words."],
        hintMap: [
          {
            rangeTo: 0,
            hintIndex: 0,
            rangeFrom: 0,
          },
          {
            rangeTo: 6,
            hintIndex: 1,
            rangeFrom: 2,
          },
          {
            rangeTo: 11,
            hintIndex: 2,
            rangeFrom: 8,
          },
          {
            rangeTo: 17,
            hintIndex: 3,
            rangeFrom: 13,
          },
        ],
        lang_hints: "en",
      },
      avatarUrl:
        "https://stories-cdn.duolingo.com/image/2b2b64afe0c2af19eed8ac69c36cb8803d0a090e.svg",
      characterId: 560,
    },
    type: "LINE",
    audio: {
      ssml: {
        id: 0,
        text: '<speak>I write with <prosody volume="silent">words</prosody>.</speak>',
        mapping: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          13,
          14,
          15,
          16,
          17,
          17,
          17,
          17,
          17,
          17,
          17,
          17,
          17,
          17,
          17,
          18,
          18,
          18,
          18,
          18,
          18,
          18,
          18,
          18,
        ],
        speaker: "",
        plan_text: "I write with [words].",
        inser_index: 7,
      },
    },
    editor: {
      end_no: 53,
      start_no: 51,
    },
    trackingProperties: {
      line_index: 0,
    },
    hideRangesForChallenge: [
      {
        end: 18,
        start: 13,
      },
    ],
  },
  {
    lang: "nl",
    type: "MULTIPLE_CHOICE",
    editor: {
      end_no: 60,
      start_no: 53,
    },
    answers: [
      {
        text: "words",
        hints: ["words"],
        hintMap: [
          {
            rangeTo: 4,
            hintIndex: 0,
            rangeFrom: 0,
          },
        ],
        lang_hints: "en",
      },
      {
        text: "sentences",
        hints: ["sentences"],
        hintMap: [
          {
            rangeTo: 8,
            hintIndex: 0,
            rangeFrom: 0,
          },
        ],
        lang_hints: "en",
      },
      {
        text: "texts",
        hints: ["texts"],
        hintMap: [
          {
            rangeTo: 4,
            hintIndex: 0,
            rangeFrom: 0,
          },
        ],
        lang_hints: "en",
      },
    ],
    correctAnswerIndex: 0,
    trackingProperties: {
      line_index: 0,
      challenge_type: "continuation",
    },
  },
];

export const Normal = {
  render: (args) => <StoryProgress parts_list={[parts]} {...args} />,
};
