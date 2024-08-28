import { gql } from "@apollo/client";

export const GET_ACTIVITY = gql`
  query GetActivity {
    logs(order_by: { block_timestamp: desc }, limit: 6) {
      address
      block_number
      block_timestamp
      from
      to
      transaction_hash
      type
      point
    }
  }
`;
