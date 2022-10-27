import React from "react";
import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function PerformerDelete({ Performer_id }) {
  /**********************Delete********* */
  const handleDelete = async (Performer_id) => {
    console.log(Performer_id);
    try {
      const body = {
        Performer_id: Performer_id,
      };
      alert(JSON.stringify(body));
      await fetch("/api/performer/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <IconButton
        variant="outline"
        colorScheme="gray"
        aria-label="Call Sage"
        fontSize="13px"
        color="gray.400"
        borderWidth={0}
        icon={<CloseIcon />}
        onClick={() => handleDelete(Performer_id)}
      />
    </div>
  );
}
