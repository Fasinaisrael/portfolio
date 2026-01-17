'use client';

import { experience } from '@/data/experience';
import ExperienceCard from '@/components/shared/ExperienceCard';
import { Box, Container, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/GridLegacy';

export default function ExperiencePage() {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 } }}>
            {/* Background blobs (lighter than homepage) */}
            <Box sx={blob('#a855f7', { top: -180, left: -180 })} />
            <Box sx={blob('#22d3ee', { bottom: -200, right: -200 })} />

            <Container maxWidth="lg">
                {/* PAGE HEADER */}
                <Box sx={{ maxWidth: 800, mb: 8 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            mb: 2,
                        }}
                    >
                        Professional Experience
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '1.05rem',
                            color: 'text.secondary',
                            lineHeight: 1.8,
                        }}
                    >
                        A summary of my professional journey building secure, scalable,
                        production-grade systems across multiple industries.
                    </Typography>
                </Box>

                <Divider sx={{ mb: 6 }} />

                {/* EXPERIENCE LIST */}
                <Grid container spacing={4}>
                    {experience.map((item, index) => (
                        <Grid item xs={12} key={`${item.company}-${index}`}>
                            <ExperienceCard {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

/* ---------- styles ---------- */

const blob = (color: string, pos: any) => ({
    position: 'absolute',
    width: 420,
    height: 420,
    bgcolor: color,
    opacity: 0.18, // lighter than home
    filter: 'blur(140px)',
    borderRadius: '50%',
    pointerEvents: 'none',
    ...pos,
});