import React, { useState } from "react";
import { GiveList } from "../../components/common/List/list";
import BackButton from "../../components/common/BackButton/backButton";

const ShareStatusPage = () => {
    return (
        <>
            <BackButton text="나눔 현황" />
            <GiveList></GiveList>
        </>
    );
};
export default ShareStatusPage;
