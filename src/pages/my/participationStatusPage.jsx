import React, { useState } from "react";
import List from "../../components/common/List/list";
import BackButton from "../../components/common/BackButton/backButton";
const ParticipationStatusPage = () => {
  return (
    <>
      <BackButton text="참여 현황" />
      <List></List>
    </>
  );
};
export default ParticipationStatusPage;
