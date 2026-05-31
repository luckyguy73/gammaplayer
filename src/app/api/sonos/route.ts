import { NextResponse } from 'next/server';

const SONOS_API = process.env.SONOS_API_URL;
const SPEAKER = 'Lounge';

// ==========================================
// Operational Functions
// ==========================================

async function handleVolumeControl(volume: number): Promise<void> {
    const targetVolume = Math.max(0, Math.min(100, volume));
    const res = await fetch(`${SONOS_API}/${SPEAKER}/volume/${targetVolume}`);
    if (!res.ok) throw new Error(`Failed to set volume to ${targetVolume}`);
}

async function clearSpeakerQueue(): Promise<void> {
    const res = await fetch(`${SONOS_API}/${SPEAKER}/clearqueue`);
    if (!res.ok) throw new Error('Failed to clear Sonos queue');
}

async function executeMusicSearch(query: string, artist?: string): Promise<string> {
    const searchString = artist ? `${artist} ${query}` : query;
    const searchUrl = `${SONOS_API}/${SPEAKER}/musicsearch/library/song/${encodeURIComponent(searchString)}`;

    const res = await fetch(searchUrl);
    if (!res.ok) throw new Error(`Sonos music search failed for: ${searchString}`);

    return searchString;
}

// ==========================================
// Core API Endpoint Handler
// ==========================================

export async function POST(request: Request) {
    try {
        const { action, query, artist, volume } = await request.json();

        // 1. Clear Queue
        if (action === 'clear') {
            await clearSpeakerQueue();
            return NextResponse.json({ success: true, message: 'Queue cleared.' });
        }

        // 2. Volume Adjustment
        if (typeof volume === 'number') {
            await handleVolumeControl(volume);
        }

        // 3. Search and Play
        if (query) {
            const finalSearchString = await executeMusicSearch(query, artist);
            return NextResponse.json({
                success: true,
                message: `Successfully queued and played: "${finalSearchString}"`
            });
        }

        return NextResponse.json({ success: true, message: 'No action performed.' });

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Sonos Proxy Error:', errorMessage);
        return NextResponse.json(
            { error: 'Failed to execute action', details: errorMessage },
            { status: 500 }
        );
    }
}
