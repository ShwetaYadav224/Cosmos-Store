const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcXZKIjn-ChgrRZSp8YFCStjlayKrvMjZ4FsDJSWHLcHm6GOmXGQyjfJ7cMlM911PXkrvxN3sbevG_Ln",
  client_secret: "EEGuRf6oqU3-Z5p3Ww9MrLv3DJyZ8R-qs9-8UoTweYOwf9LfyP0FgzUq0jFQpnwacR1bv3aYPc6kjygU",
});

module.exports = paypal;
