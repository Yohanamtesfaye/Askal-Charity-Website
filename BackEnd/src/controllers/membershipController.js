const register = async (req, res) => {
  const { name, gender, phoneNumber, age, address, membershipType, donationAmount } = req.body;
  const photo = req.file;

  if (!name || !gender || !phoneNumber || !age || !address || !membershipType) {
    return res.status(400).json({ message: 'All fields except photo and donation are required' });
  }

  const finalMembershipType = membershipType || 
    (donationAmount && donationAmount !== '0' ? `Premium (${donationAmount})` : 'Basic');
  const payments = JSON.stringify(Array(6).fill(false));

  try {
    let photoPath = null;
    let photoUrl = null; // Will store the accessible URL
    
    if (photo) {
      const uploadDir = path.join(__dirname, '../uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      
      // Generate clean filename
      const cleanName = photo.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
      const filename = `${Date.now()}-${cleanName}`;
      photoPath = path.join('uploads', filename);
      photoUrl = `/uploads/${filename}`; // URL to access the image
      
      // Save file
      await fs.promises.writeFile(
        path.join(__dirname, '../', photoPath),
        photo.buffer
      );
    }

    const [result] = await db.query(
      `INSERT INTO memberships 
       (name, gender, phone_number, age, address, membership_type, photo_path, payments) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, gender, phoneNumber, age, address, finalMembershipType, photoPath, payments]
    );

    res.status(201).json({ 
      message: 'Registration successful!',
      id: result.insertId,
      photo_url: photoUrl, // Send back the accessible URL
      member: {
        id: result.insertId,
        name,
        gender,
        phone_number: phoneNumber,
        age,
        address,
        membership_type: finalMembershipType,
        photo_path: photoUrl, // Consistent format with existing members
        payments: JSON.parse(payments)
      }
    });
    
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ 
      message: 'Server Error',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};