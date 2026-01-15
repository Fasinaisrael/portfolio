'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Chip,
  Stack,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', py: 12 }}>
      {/* Background blobs */}
      <Box sx={blob('#a855f7', { top: -200, left: -200 })} />
      <Box sx={blob('#22d3ee', { top: 200, right: -200 })} />
      <Box sx={blob('#ec4899', { bottom: -100, left: '50%' })} />

      <Container maxWidth="lg">
        {/* HERO */}
        <Box sx={{ maxWidth: 900 }}>
          {/* NAME */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.03em',
              mb: 2,
              fontSize: { xs: '2.8rem', md: '4rem' },
            }}
          >
            Israel Fasina
          </Typography>

          {/* ROLE */}
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontWeight: 500,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
            }}
          >
            Senior Software Engineer (Mobile & Web)
          </Typography>

          {/* VALUE STATEMENT */}
          <Typography
            sx={{
              maxWidth: 700,
              fontSize: { xs: '1.05rem', md: '1.15rem' },
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 6,
            }}
          >
            I build secure, scalable software across fintech, edutech, foodtech, E-commerce and internal
            platforms — with a strong focus on system stability, performance, and security-first engineering
            including VAPT practices.
          </Typography>

          {/* ACTIONS */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/experience"
              sx={{ px: 4, py: 1.6 }}
            >
              View Experience
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/project"
              sx={{ px: 4, py: 1.6 }}
            >
              View Projects
            </Button>
          </Stack>
        </Box>

        {/* HIGHLIGHTS */}
        <Grid container spacing={3} sx={{ mt: { xs: 6, md: 10 } }}>
          <Highlight
            title="Multi-Industry Experience"
            text="Delivered production systems across fintech, edutech, foodtech, and internal platforms with real business impact."
          />

          <Highlight
            title="Mobile & Platform Ownership"
            text="End-to-end ownership of iOS, Android, and Web apps including CI/CD pipelines, releases, monitoring, and store deployments."
          />

          <Highlight
            title="Security-First Engineering"
            text="Practicing VAPT, secure SDLC, token-based authentication, defensive coding, and proactive threat mitigation."
          />

          <Highlight
            title="System Stability & Reliability"
            text="Stabilizing legacy systems, fixing critical production issues, improving performance, and shipping with confidence."
          />
        </Grid>
      </Container>
    </Box>
  );
}

function Highlight({ title, text }: { title: string; text: string }) {
  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: '100%',
          bgcolor: 'background.paper',
          transition: '0.25s',
          '&:hover': { transform: 'translateY(-6px)' },
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
          <Typography sx={{ mt: 2, color: 'grey.400' }}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const blob = (color: string, pos: any) => ({
  position: 'absolute',
  width: 500,
  height: 500,
  bgcolor: color,
  opacity: 0.25,
  filter: 'blur(140px)',
  borderRadius: '50%',
  ...pos,
});