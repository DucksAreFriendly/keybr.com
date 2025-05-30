import { lessonProps } from "@keybr/lesson";
import { useSettings } from "@keybr/settings";
import { Description, Explainer, Field, FieldList, Range } from "@keybr/widget";
import { type ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export function AlphabetSizeProp(): ReactNode {
  const { settings, updateSettings } = useSettings();
  return (
    <>
      <FieldList>
        <Field>
          <FormattedMessage
            id="t_Unlock_more_letters:"
            defaultMessage="Unlock more letters:"
          />
        </Field>
        <Field>
          <Range
            size={16}
            min={1}
            max={100}
            step={1}
            value={Math.round(
              settings.get(lessonProps.guided.alphabetSize) * 100,
            )}
            onChange={(value) => {
              updateSettings(
                settings.set(lessonProps.guided.alphabetSize, value / 100),
              );
            }}
          />
        </Field>
      </FieldList>
      <Explainer>
        <Description>
          <FormattedMessage
            id="settings.alphabetSize.description"
            defaultMessage="Manually unlock the remaining letters. Use this option if want a greater variety of words. We recommend using this option sparingly and stick to the algorithm to unlock letters for you."
          />
        </Description>
      </Explainer>
    </>
  );
}
