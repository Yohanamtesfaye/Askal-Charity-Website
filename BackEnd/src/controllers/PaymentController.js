
     const db = require('../config/db');

     const updatePaymentStatus = async (req, res) => {
       const { memberId, paymentIndex } = req.body;

       // Validation
       if (!memberId || paymentIndex === undefined || paymentIndex < 0 || paymentIndex > 5) {
         return res.status(400).json({ message: 'Invalid member ID or payment index' });
       }

       try {
         const [rows] = await db.query('SELECT payments FROM memberships WHERE id = ?', [memberId]);
         if (rows.length === 0) {
           return res.status(404).json({ message: 'Member not found' });
         }

         let payments = Array(6).fill(false); // Default fallback
         const paymentsValue = rows[0].payments;
         if (typeof paymentsValue === 'string' && paymentsValue.trim() !== '') {
           try {
             payments = JSON.parse(paymentsValue);
             if (!Array.isArray(payments) || payments.length !== 6) {
               console.error(`Invalid payments array for member ${memberId}:`, paymentsValue);
               payments = Array(6).fill(false); // Reset to default if invalid
             }
           } catch (e) {
             console.error(`Invalid payments JSON for member ${memberId}:`, paymentsValue, e.message);
             payments = Array(6).fill(false); // Fallback to default
           }
         } else {
           console.warn(`Empty or null payments for member ${memberId}:`, paymentsValue);
         }

         // Update the payment status
         payments[paymentIndex] = !payments[paymentIndex];

         // Update the database
         await db.query('UPDATE memberships SET payments = ? WHERE id = ?', [
           JSON.stringify(payments),
           memberId
         ]);

         res.status(200).json({
           message: 'Payment status updated successfully',
           payments
         });
       } catch (err) {
         console.error('Update Payment Error:', err);
         res.status(500).json({
           message: 'Failed to update payment status',
           error: process.env.NODE_ENV === 'development' ? err.message : undefined
         });
       }
     };

     module.exports = { updatePaymentStatus };
     