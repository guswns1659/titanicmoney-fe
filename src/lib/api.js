import axios from 'axios';

export const charge = async (amount) => {
     const { data } =  await axios.post('/api/charge', {
        tiAccountId: 12345,
        bankAccountId: "123-123",
        amount: Number(amount),
        channelId: 1,
        itemId: 1,
        requestId: "request-123"
    });

     return data;
}