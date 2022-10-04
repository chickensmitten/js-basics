NodeJS Error Handling
The finished code of this section will crash if you try to visit /my-place/:id with an invalid ID (that can't be converted to the special MongoDB ObjectId type).

You can of course add error handling in a similar way as you learned it before in the course:

try-catch for synchronous code (or async/ await)

then() / catch() for promise-based code (where you don't use async/ await)

Example:

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;
 
  client.connect(function(err, client) {
    const db = client.db('locations');
 
    // Insert a single document
    db.collection('user-locations').findOne(
      {
        _id: new mongodb.ObjectId(locationId)
      },
      function(err, doc) {
        // if (err) {}
        if (!doc) {
          return res.status(404).json({ message: 'Not found!' });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});
can be improved like this:

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;
 
  client.connect(function(err, client) {
    const db = client.db('locations');
    
    // THIS WAS ADDED
    let locationId;
    try {
        locationId = new mongodb.ObjectId(locationId);
    } catch (error) {
        // return to make sure the other code does not execute
        return res.status(500).json({message: 'Invalid id!'}); 
    }
    // END OF ADDED CODE
 
    // Insert a single document
    db.collection('user-locations').findOne(
      {
        _id: locationId // will only be reached if the above code didn't throw an error
      },
      function(err, doc) {
        // if (err) {}
        if (!doc) {
          return res.status(404).json({ message: 'Not found!' });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});
I dive deeper into more generic NodeJS error handling in my "NodeJS - The Complete Guide" course but the important takeaway here is, that you have the same error handling tools as in browser-side JavaScript.