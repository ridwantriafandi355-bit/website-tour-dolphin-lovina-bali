$lines = Get-Content "index.html" -Encoding UTF8
$pricingLine = -1
for ($i = 586; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'pricing-section') {
        $pricingLine = $i
        break
    }
}
Write-Host "Pricing section found at line: $pricingLine"
$before = $lines[0..585]
$after = $lines[$pricingLine..($lines.Count - 1)]
$newLines = $before + "" + "  <!-- ===== PRICING SECTION ===== -->" + $after
$newLines | Set-Content "index.html" -Encoding UTF8
Write-Host "Done. Old count: $($lines.Count), New count: $($newLines.Count)"
