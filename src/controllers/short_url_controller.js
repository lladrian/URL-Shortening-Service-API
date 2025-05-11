import asyncHandler from 'express-async-handler';
import moment from 'moment-timezone';
import ShortURL from '../models/short_url.js';
import shortid from 'shortid';



function storeCurrentDate(expirationAmount, expirationUnit) {
    // Get the current date and time in Asia/Manila timezone
    const currentDateTime = moment.tz("Asia/Manila");
    // Calculate the expiration date and time
    const expirationDateTime = currentDateTime.clone().add(expirationAmount, expirationUnit);

    // Format the current date and expiration date
    const formattedExpirationDateTime = expirationDateTime.format('YYYY-MM-DD');

    // Return both current and expiration date-time
    return formattedExpirationDateTime;

}


export const create_short_url = asyncHandler(async (req, res) => {
    const { url } = req.body;
    
    try {
        // Check if all required fields are provided
        if (!url) {
            return res.status(400).json({ message: "Please provide all fields (url)." });
        }

        const shortCode = shortid.generate();
        const newShortURL = new ShortURL({
            url: url,
            short_code: shortCode,
            access_count: 0,
            created_at: storeCurrentDate(0, 'hours'),
            updated_at: storeCurrentDate(0, 'hours'),
        });

        await newShortURL.save();

        return res.status(200).json({ data: 'Shorten URL successfully created.', newShortURL });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create shorten URL.' });
    }
});

export const get_specific_stats_short_url = asyncHandler(async (req, res) => {
    const { short_code } = req.params; // Get the meal ID from the request parameters

    try {
        const shorURL = await ShortURL.findOne({short_code: short_code});
        if (!shorURL) return res.status(404).json({ message: 'Shorten URL not found' });

        res.status(200).json({ data: shorURL });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get specific shorten URL stats.' });
    }
});


export const get_specific_short_url = asyncHandler(async (req, res) => {
    const { short_code } = req.params; // Get the meal ID from the request parameters

    try {
        const shorURL = await ShortURL.findOne({short_code: short_code});
        if (!shorURL) return res.status(404).json({ message: 'Shorten URL not found' });

        shorURL.access_count += 1;
        await shorURL.save();

        return res.redirect(shorURL.url);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get specific shorten URL.' });
    }
});



export const update_short_url = asyncHandler(async (req, res) => {    
    const { short_code } = req.params; // Get the meal ID from the request parameters
    const { url } = req.body;

    try {
        const shorURL = await ShortURL.findOne({short_code: short_code});
        if (!shorURL) return res.status(404).json({ message: 'Shorten URL not found' });

        if (!url) {
            return res.status(400).json({ message: "All fields are required: url." });
        }

        shorURL.url = url;
        await shorURL.save();

        return res.status(200).json({ data: shorURL });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update shorten URL.' });
    }
});


export const delete_short_url = asyncHandler(async (req, res) => {    
    const { short_code } = req.params; // Get the meal ID from the request parameters

    try {
        const shorURL = await ShortURL.findOne({short_code: short_code});
        if (!shorURL) return res.status(404).json({ message: 'Shorten URL not found' });

        await shorURL.deleteOne();

        return res.status(200).json({ data: 'Shorten URL successfully deleted.' });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete shorten URL.' });
    }
});


