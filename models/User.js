const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'You must provide a username.',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'You must provide an email address.',
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function () {
    // return length of friends array 
    return this.friends.length
})

// create the User model using the userSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;