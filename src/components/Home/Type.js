import React from "react";
import Typewriter from "typewriter-effect";
import { useI18n } from "../../i18n/I18nContext";

function Type() {
  const { t } = useI18n();
  return (
    <Typewriter
      options={{
        strings: t("home.type"),
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
