import React, { useEffect } from "react";
import styles from "./StoryChallengeMultipleChoice.module.css";
import StoryTextLine from "../StoryTextLine";
import StoryQuestionMultipleChoice from "../StoryQuestionMultipleChoice";
import FadeGlideIn from "../FadeGlideIn";

function StoryChallengeMultipleChoice({
  parts,
  partProgress,
  setButtonStatus,
  active,
  hidden,
  settings,
}) {
  if (active && partProgress === 0)
    setButtonStatus(settings.hide_questions ? "continue" : "idle");

  const id = React.useId();

  const show_question = active && partProgress === 1;

  if (settings.hide_questions) {
    return (
      <FadeGlideIn key={`${id}-1`} hidden={hidden}>
        <StoryTextLine active={active} element={parts[0]} settings={settings} />
      </FadeGlideIn>
    );
  }

  return (
    <>
      <FadeGlideIn key={`${id}-1`} hidden={hidden}>
        <StoryTextLine
          key={parts[0].trackingProperties.line_index}
          element={parts[0]}
          settings={settings}
        />
      </FadeGlideIn>
      <FadeGlideIn
        key={`${id}-2`}
        show={show_question || settings.show_all}
        hidden={hidden}
      >
        <StoryQuestionMultipleChoice
          element={parts[1]}
          active={active}
          advance={() => {
            setButtonStatus("right");
          }}
        />
      </FadeGlideIn>
    </>
  );
}

export default StoryChallengeMultipleChoice;
